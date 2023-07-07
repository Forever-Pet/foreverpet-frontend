// Components
import ModalBackground from "../../../common/Modal/ModalBackground";
import Input from "../../../common/Input/Input"
import Button from "../../../common/Button/Button"

const LocalAuthUserJoin = () => {
  return( 
    <ModalBackground>
      <form>
        <Input type="text" placeholder="한글, 영문, 숫자만 입력해 주세요" minLength="2" maxLength="5" required/>
        <Input type="email" placeholder="이메일 주소를 입력해 주세요." minLength="2" maxLength="5" required/>
        <Button title="중복 확인" />
        <Input type="password" placeholder="비밀번호를 입력해 주세요 (영문, 숫자 사용10~20자)" minLength="10" maxLength="20" required/>
        <Input type="password" placeholder="비밀번호를 재입력해 주세요" minLength="10" maxLength="20" required/>
        <Input type="number" placeholder="휴대폰 번호를 '-' 없이 입력해 주세요" minLength="8" maxLength="11" required/>
      </form>
    </ModalBackground>
    )
};

export default LocalAuthUserJoin;
