```markdown
# NVM for Windows 설치 및 Node.js 사용법

## ✅ 설치 전 주의사항

- **Windows**: [공식 릴리즈 페이지](https://github.com/coreybutler/nvm-windows/releases)에서 **가장 최근 릴리즈 버전**을 설치해야 합니다.
- **nvm은 반드시 관리자 권한으로 실행한 CMD 또는 PowerShell**에서 사용해야 정상 작동합니다.
- **Mac**은 관리자 권한이 필요 없습니다. (리눅스는 미확인)
- 환경변수는 자동으로 설정되므로 별도 설정은 필요 없습니다.

---

## 🔧 설치 과정

![1번](./image%20(1).png)  
![2번](./image%20(2).png)

---

## ✅ 설치 확인

```bash
nvm version
```

![3번](./image%20(3).png)

---

## 📦 Node.js 설치 및 사용

- 현재 LTS 버전: **22.18.0**
- 반드시 `nvm`을 통해 설치해야 하며, **Node.js 공식 사이트에서 직접 설치 금지!**

### 🔍 사용 가능한 Node.js 버전 확인

```bash
nvm list available
```

![4번](./image%20(4).png)

### 📥 LTS 버전 설치

```bash
nvm install --lts
```

![5번](./image%20(5).png)

### 🚀 설치한 버전 사용 설정

```bash
nvm use 22.18.0
node --version
```

![6번](./image%20(6).png)
```