import { Client } from 'basic-ftp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'out');

const required = ['FTP_HOST', 'FTP_USER', 'FTP_PASSWORD'];
for (const k of required) {
  if (!process.env[k]) {
    console.error(`\n[ERREUR] Variable ${k} manquante dans .env.local`);
    console.error('Voir .env.local.example pour le format attendu.');
    process.exit(1);
  }
}

const remoteDir = process.env.FTP_REMOTE_DIR || '/htdocs';
const client = new Client(120_000);
client.ftp.verbose = false;

const start = Date.now();
try {
  console.log(`\n→ Connexion à ${process.env.FTP_HOST}...`);
  await client.access({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: Number(process.env.FTP_PORT || 21),
    secure: process.env.FTP_SECURE === 'true',
    secureOptions: { rejectUnauthorized: false },
  });

  await client.cd(remoteDir);
  const pwd = await client.pwd();
  console.log(`✓ Connecté (${pwd})`);

  process.stdout.write(`→ Suppression de l'ancien _next/ sur le serveur... `);
  try {
    await client.removeDir('_next');
    console.log('OK');
  } catch {
    console.log('(aucun)');
  }

  console.log(`→ Upload de ${OUT_DIR} vers ${remoteDir}...`);
  client.trackProgress((info) => {
    if (info.type === 'upload' && info.name) {
      process.stdout.write(`\r  ${info.name.padEnd(60).slice(0, 60)}`);
    }
  });
  await client.uploadFromDir(OUT_DIR);
  client.trackProgress();
  process.stdout.write('\r' + ' '.repeat(70) + '\r');

  const seconds = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✓ Déploiement terminé en ${seconds}s.`);
  console.log('→ Vérifier sur https://fondationfantasy.org (Ctrl+F5 pour vider le cache)\n');
} catch (e) {
  console.error('\n[ERREUR]', e.message || e);
  process.exit(1);
} finally {
  client.close();
}
