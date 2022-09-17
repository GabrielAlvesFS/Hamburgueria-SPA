import styled from 'styled-components';

export const PaymentStyle = styled.div`
background-color: blue;

.returnPage {
position: absolute;
width: 200px;
height: 40px;
left: 60px;
top: 50px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 36px;


}

.secContainer{
  position: absolute;
  width: 50vw;
  height: 100vh;
  left: 200px;
  top: 120px;
  background-color: lavender;

}


.data {
width: 100%;
padding-top: 20px;
padding-bottom: 20px;

font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 33px;

}

.radioContainerAdress {
width: 50%;
display: flex;
justify-content: space-between;

}

.radioContainerPayment {
width: 50%;
display: flex;
justify-content: space-between;
padding-bottom: 20px;
}


.paymentMethod {
padding-bottom: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
}

input[type=radio]#red {
            accent-color: rgba(255, 35, 81, 1);

        }

`;
