import fs from "fs/promises";

const versionFile = "./src/version.json";
const envFile = "./.env";

async function main() {
  try {
    const data = await fs.readFile(versionFile, "utf-8");
    const versionData = JSON.parse(data);

    versionData.build = (versionData.build || 0) + 1;

    await fs.writeFile(versionFile, JSON.stringify(versionData, null, 2));
    console.log(`✅ Build version updated to ${versionData.build}`);

    // 👇 Read existing .env (if it exists)
    let envContent = "";
    try {
      envContent = await fs.readFile(envFile, "utf-8");
    } catch {
      // file might not exist yet
    }

    // 👇 Update or insert VITE_APP_VERSION
    const lines = envContent.split("\n").filter(Boolean);
    const filtered = lines.filter(
      (line) => !line.startsWith("VITE_APP_VERSION=")
    );

    filtered.push(`VITE_APP_VERSION=${versionData.build}`);

    await fs.writeFile(envFile, filtered.join("\n") + "\n");

    console.log(`✅ .env updated safely`);
  } catch (err) {
    console.error("❌ Failed to increment version:", err);
    process.exit(1);
  }
}

main();
