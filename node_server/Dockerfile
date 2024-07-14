# Node.js 이미지를 기반으로 설정
FROM node:14

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 패키지 파일 복사
COPY package*.json ./

# 패키지 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 실행
CMD ["node", "server.js"]
