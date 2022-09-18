import styled from 'styled-components';

export const PaymentStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #E5E5E5;
  padding: 3% 0%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }


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
  width: 70%;
  height: fit-content;
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
