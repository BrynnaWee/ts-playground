# ts-playground

## 📁 프로젝트 구조

```
├── .vscode/              # VS Code 설정 폴더
│   └── tasks.json        # task설정(한곳에서 관리`)
├── ts-document/          # 공식문서 뽀개기
│   ├── src/              # TypeScript 소스 파일
│   ├── dist/             # 컴파일된 JavaScript 파일
│   └── tsconfig.json     # TypeScript 설정 파일(프로젝트 개별)
├──  ❓❓                  # 새로 생길 미지의 폴더..             
├── README.md              
├── tsconfig.json         # 공통설정, 프로젝트별 reference
└── .gitignore            
```

## 🟪 프로젝트 상세 설명

### 📚 ts-document - 공식문서 뽀개기
TypeScript 공식문서를 체계적으로 학습하고 정리하는 프로젝트입니다.

- **목표**: TypeScript 공식문서 완독하기
- **구성**: handbook페이지 별로 실습하고 업로드. 대충 끄적이는 연습장
- **실행 방법**: 
  - `Ctrl+Shift+P` => Tasks: Run Task"
  - 'ts-watch'작업선택 : 파일변경 감지해 컴파일 실행(`Ctrl+Shift+B`로 빌드그룹에서 선택 가능)
  - 'ts-dev'작업선택 : TypeScript 파일 실시간 실행
    - without compile
    - 처음 task를 실행할 때, 테스트할 파일탭이 활성화되어야함. 
    - 내부 ${file}에 현재 열려있는 파일이 지정됨
