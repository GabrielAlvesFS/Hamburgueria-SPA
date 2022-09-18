import styled from 'styled-components';

export const PaymentStyle = styled.div`
width: 100vw;
height: 200vh;
background-color: #E5E5E5;

.returnPage {
position: absolute;
width: 200px;
height: 40px;
left: 60px;
top: 20px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 36px;


}

.secContainer{
  position: absolute;
  width: 40%;
  height: fit-content;
  left: 180px;
  top: 70px;
  padding-left: 2%;
  padding-bottom: 2%;
  background-color: white;
  border-radius: 20px;

}


.title {
width: 100%;
padding-top: 5%;
padding-bottom: 5%;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 33px;

}

.adressInfo {
width: 40%;
display: grid;
grid-template-columns: 200px 200px;
gap: 20px;
;
}

.radioContainerPayment {
width: 100%;
display: flex;
justify-content: space-between;
padding: 0% 10% 4% 5%;
}


.paymentMethod {
padding-bottom: 5%;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
}


input[type=radio] {
            accent-color: #ff4040;
            width: 30px;
}

.secBtn {
  display: flex;
  justify-content: center;
  padding: 2% 5% 2% 0%;
}

.paymentBtn {
  background-color: #ff4040
}

`;
