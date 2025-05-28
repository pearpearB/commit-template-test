const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../.gitmessage.txt');

try {
  // 현재 브랜치 이름 가져오기
  const branchName = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();

  // 파일 읽기
  let content = fs.readFileSync(FILE_PATH, 'utf-8');

  // __name__ → 브랜치명으로 치환
  const replaced = content.replace(/__name__/g, branchName);

  // 파일 덮어쓰기
  fs.writeFileSync(FILE_PATH, replaced);

  console.log(`✅ .gitmessage.txt updated with branch name: ${branchName}`);
} catch (error) {
  console.error('❌ Failed to update .gitmessage.txt:', error.message);
  process.exit(1);
}
