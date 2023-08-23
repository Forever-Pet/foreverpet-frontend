# 반려 동물을 위한 쇼핑몰 - 포에버펫

## 배포 링크

[포에버펫](http://ec2-13-209-75-154.ap-northeast-2.compute.amazonaws.com:3000/) 에서 이용하실 수 있어요.

---

## ✨ Intro

<p align="center">
  <img width="300" alt="foreverpet_image" src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/f548fdcb-ee2b-426c-a4f0-a0e9f4ba633f"/>
</p>
<p align="center">
<img src="https://img.shields.io/badge/React-FFFFFF?style=flat&logo=React&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/CSS Modules-ffffff?style=flat&logo=CSS Modules&logoColor=000000"/>
<img src="https://img.shields.io/badge/Axios-ffffff?style=flat&logo=Axios&logoColor=5A29E4"/>
<img src="https://img.shields.io/badge/Redux-ffffff?style=flat&logo=Redux&logoColor=764ABC"/>
<img src="https://img.shields.io/badge/Lodash-ffffff?style=flat&logo=Lodash&logoColor=3492FF"/>
<img src="https://img.shields.io/badge/Vite-ffffff?style=flat&logo=Vite&logoColor=646CFF"/>
</p>

**💡 반려 동물 친환경 & 비건 서비스 쇼핑몰**

반려 동물 산업이 국내외 소비시장에서 급격히 부상하고 있습니다. 1인가구의 증가, 고령화 등 세계 인구 구조의 변화로 반려동물 양육 인구가 증가하고, 반려동물을 가족처럼 생각하는 문화가 확산 되면서 일명 '펫케어' 산업의 양적 & 질적 성장은 더욱 가속화 될 전망이라고 합니다.

그래서 오랜 시간을 함께 할 반려 동물을 위한 친환경 , 비건 제품 등을 판매하여 소비자들 즉, 반려 동물에게 전해짐으로써 펫 케어를 위한 서비스를 제공 해 주는 웹 사이트를 제작하는 것 입니다.

## ⏩ 기능 시연

<details>
<summary><b>로그인(카카오 소셜 로그인)</b></summary>
<div markdown="1">
  
![포에버-로그인](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/c533a151-4d78-4997-8079-3f4f24ebd61f)

(소셜 로그인)

- 포에버펫 사이트에 접속하면 헤더 오른쪽 상단에 로그인 버튼을 눌러 소셜 로그인 , 일반 로그인을 할 수 있습니다.

- 인증(로그인)을 하면 헤더 상단의 화면이 분기 됩니다.
</div>
</details>

<details>
<summary><b>회원가입</b></summary>
<div markdown="1">
  
![포에버-회원가입](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/5e1b6240-92ef-47a3-995f-9e9c0d1025e1)

- 포에벗 사이트에 접속 하여 회원가입을 클릭하면 사용자 정보와 아이디 중복 확인을 통해 회원가입을 할 수 있습니다.
</div>
</details>

<details>
<summary><b>메인(로그인,로그아웃)</b></summary>
<div markdown="1">
  
![포에버-인증상태 화면](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/8094d3f4-99c4-4b7e-9d1f-073e985669f7)

- 로그인 또는 회원가입을 하면 헤더 상단의 인증(로그인,로그아웃) 상태가 변동 됩니다.

</div>
</details>

<details>
<summary><b>상품 추천</b></summary>
<div markdown="1">
  
![포에버-상품추천](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/fcf8def7-3fc4-41eb-8332-a2ccc339630b)

- 메인 홈 화면에서 베스트 , 신상품 , 간식 상품들의 API 를 랜덤 호출하여 확인 할 수 있습니다.
</div>
</details>

<details>
<summary><b>상품 상세 페이지</b></summary>
<div markdown="1">
  
![포에버- 상품상세](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/e9034c60-45bd-4300-b71e-5db03608940e)

- 해당 상품 카드를 클릭하면 상품 상세 페이지로 이동하여 상품 상세 정보를 확인 할 수 있고, 장바구니 & 구매를 할 수 있습니다.
</div>
</details>

<details>
<summary><b>전체 상품 페이지</b></summary>
<div markdown="1">
  
![포에버-상품전체](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/c7e204b5-a432-4dde-9d9e-0056245c3f7d)

- 햄버거 버튼 또는 메인 홈 카테고리에서 사료 , 간식 , 건강식품을 클릭하면 해당 상품들이 있는 페이지로 이동합니다.
</div>
</details>

<details>
<summary><b>장바구니</b></summary>
<div markdown="1">
  
![포에버 - 장바구니](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/91958746-6022-47bd-b046-5f5b7a1e1bc9)

- 상품 카드에서 장바구니 아이콘을 클릭하면 장바구니에 담은 후 확인 할 수 있고, 헤더 부분에 장바구니 아이콘에 수량을 확인 할 수 있습니다.

- 장바구니에서 수량을 변동 할 수 있고 , 장바구니 상품을 삭제 할 수 있습니다.

- 장바구니 모달 창에서 결제하기 버튼을 클릭하면 결제 페이지로 이동 합니다.
</div>
</details>

<details>
<summary><b>결제 페이지</b></summary>
<div markdown="1">
  
![포에버-결제_1](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/13e559c8-c09d-4951-85fb-24e7a7721903)

![포에버-결제_2](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/5a2c9de1-3ac5-47d6-a56e-b4f28df3cdb4)

- 상품의 상세 페이지에서 사용자의 정보를 입력 한 후 결제수단인 카카오페이로 주문이 가능합니다.

- 장바구니에서 결제하기를 클릭하면 결제 페이지로 이동하여 주문이 가능합니다.
</div>
</details>

<details>
<summary><b>키워드 검색</b></summary>
<div markdown="1">

![포에버-검색](https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/9678f4dd-23a9-4b91-b038-2dd274e170fe)

- 사료, 간식, 건강식품 상품들의 키워드로 검색이 가능합니다.

- debounce 를 사용하여 불필요한 함수 호출을 방지 하였습니다.
</div>
</details>

<details>
<summary><b>마이페이지</b></summary>
<div markdown="1">
  
![마이페이지](영상)

- 헤더 쪽 사람 아이콘을 클릭하면 마이페이지로 이동 합니다. 마이페이지에는 사용자의 프로필에서 등급,쿠폰을 확인 할 수 있습니다.

- 마이페이지는 주문내역과 장바구니 두 공간으로 분리 하였습니다.

- </div>
  </details>

<br/>

## ⚡️ Skills

더 많은 기술 이야기는 [포에버펫](http://ec2-13-209-75-154.ap-northeast-2.compute.amazonaws.com:3000/) 에서 확인하세요.

### Front-end

<summary>✅ 역할</summary>

<div markdown="1"> 
   
- 은하 : 메인 홈 ( 인증(로그아웃)상태에 따라 화면 분기 , 상품 카테고리 페이지 전달 , 상품 랜덤 호출 ) , 캐러셀 , 검색 기능 담당

- 솜사탕 : 로그인(소셜) 및 회원가입 , 마이페이지(배송지 등록정보 변경 , 비밀번호변경) , 결제 페이지 , 상품 상세 페이지 기능 담당

- 엘라 : 마이페이지 (주문내역 , 찜리스트) , 장바구니 페이지 , 상품 페이지 기능 담당
</div>
  


 <summary>✅ 기술스택</summary>    
<p>
  <img src="https://user-images.githubusercontent.com/52682603/138834243-fb74d81e-e90d-4c6a-8793-05df588f59ab.png" alt="react" width=15%>
  <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/91059825-cef7-4b70-9a48-50e9d93c7b40" alt="CSS MODULE" width=15%>
  <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/ccd791e2-8161-44b2-8c34-ff27118f3ef7" alt="axios" width=15%>
  <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/577dcd4b-962f-4599-ad56-3de1afd6d5de" alt="redux-toolkit" width=15%>
  <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/eb7876b4-742a-4f4f-87cb-c9f82902c448" alt="lodash" width=15%>
  <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/87735d15-b926-473f-a2ad-16f73079e12b" alt="vite" width=15%>
</p>

- **React** 라이브러리로 가상 Dom 사용하여 다양한 라이브러리와 프레임워크를 사용했고 , 컴포넌트 기반의 아키텍처 제공의 장점을 가져 UI 개발을 하였습니다.
- **CSS MODULE** 로 스타일을 관리하여 클래스명 오염 중복을 방지 했습니다.
- **react-responsive-carousel** 의 **Carousel** 로 슬라이드 컴포넌를 만들어 모바일 최적화 것을 우선시 하였습니다.
- **axios** 를 통해 비동기적으로 API를 호출 했습니다.
- **redux-toolkit** 은 전역 상태관리를 하기 위해서 사용 했습니다.
- **lodash** 내부의 **debounce** 를 이용하여 함수가 호출되는 속도를 제한하여 불필요한 호출이 자주 일어나지 않도록 했습니다.
- **uuid** 를 통해 네트워크상에서 고유성을 보장하는 ID를 만들었습니다.
- **sessionstorage** 를 통해 인증인가 처리할 때 jwt 토큰을 관리 했습니다.
- **vite** 를 통해 빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞췄습니다.

---

### Infra Structure

<p>
  <img src="https://user-images.githubusercontent.com/52682603/138834271-9004826c-7b4e-418a-95ea-57d1c05f6e8a.png" alt="aws_ec2" width=15%>
</p>

- **AWS EC2**를 사용해 서버를 구축했습니다.

---

## ⚡️ Convention

<details>

### **React**

- 선언형 프로그래밍으로 작성
- 재사용 로직의 경우 커스텀 훅에 작성
- 단일 컴포넌트 내에서 관리되는 상태일 경우엔 useState 사용
- 프롭스 드릴링 남발 금지 > 전역 상태 관리 라이브러리로 해당 이슈 해결 프롭스 뎁스 3이상
- props 데이터는 props.데이터로 사용 (props 데이터를 디스트럭처링 문법으로 사용 X)
- 컴포넌트 이름은 대문자로 시작하고 파스칼 케이스
- 상태 업데이트는 이전 상태 기반으로 새로운 상태를 계산하고 업데이트 하는 방식 setState((prev) => prev + 1)

### **CSS**

- ClassName 작성 규칙 BEM
- z-index 최소 값 10부터 증가는 기존 값 + 10 단위로 증가 최고 1000까지

### **JS**

- 카멜 케이스 문법 사용
- 조건문의 depth가 1 ~ 2일 경우 if() {} return
- 조건문의 depth가 4 이상일 경우 switch문 사용

### **Git**

- merge전 Approve 코드 리뷰 2개 승인 후 merge
- 기능 단위 커밋

### **VSC**

- Prettier
- Using Tab Space Sizing : 2

</details>

---

## 🌈 Members

|                                             [은하](https://github.com/EUN-HA-CHOI)                                              |                                              [솜사탕](https://github.com/sstipdev)                                              |                                               [엘라](https://github.com/shineju)                                                |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/f3c2d2f6-c01d-49b5-bc22-5ed56079896e" width=200px alt="_"/> | <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/6087df6c-1820-411a-9e3f-2dabda35bd6f" width=200px alt="_"/> | <img src="https://github.com/EUN-HA-CHOI/ForeverPet/assets/97012561/b6f32fe2-1ad5-4c9e-bcc8-fd4d48adf170" width=200px alt="_"/> |
|                                                           프론트엔드                                                            |                                                           프론트엔드                                                            |                                                           프론트엔드                                                            |
