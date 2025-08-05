nvm 설치
https://github.com/coreybutler/nvm-windows/releases <- 윈도우는 최근 릴리즈 버전 설치
nvm은 cmd or powerShell 관리자로 켜야 작동이 가능하다. / 단. 맥은 그런거 없다(리눅스로는 안해봄) <= 환경변수는 알아서 들어 있다.

설치 과정
![1번](./image%20(1).png)
![2번](./image%20(2).png)

설치 확인
![3번](./image%20(3).png)

node 설치
현재 노드 lts버전이 22.18.0이다. (절대 사이트에서 setup파일 받고 설치 금지)
nvm을 통해서 node를 설치한다.

사용할 버전
![4번](./image%20(4).png)

nvm install --lts => 현재 사용되는 제일 높은 lts 버전을 설치한다
![5번](./image%20(5).png)

nvm use 22.18.0   => 22.18.0을 이제부터 사용한다는 뜻이다.
node --version    => 확인해 준다
![6번](./image%20(6).png)