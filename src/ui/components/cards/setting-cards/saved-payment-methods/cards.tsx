import {
  InCardDiv,
  CardTitle,
  MainBox,
  AddCard,
  CreditCardModel,
  CreditNumber,
  NumberDiv,
  NumberInfo,
  CreditDetails,
  DetailDiv,
  CreditStatus,
  StatusDiv,
  CircleIconDiv,
} from './styled';
import PlusRoundedIcon from '../../../common/svgicons/PlusRoundedIcon';
import VisaIcon from '../../../common/svgicons/VisaIcon';
import ThreeDotIcon from '../../../common/svgicons/ThreeDotIcon';
import { Color } from '../../../../../constants/color';
import MasterCardIcon from '../../../common/svgicons/MasterCardIcon';
import BitCoinCardIcon from '../../../common/svgicons/BitCoinCardIcon';
import StripCardIcon from '../../../common/svgicons/StripCardIcon';
import PaypalIcon from '../../../common/svgicons/PaypalIcon';
import BitpayIcon from '../../../common/svgicons/BitpayIcon';

const cardInfos = [
  {id: 1, logo: VisaIcon, bgColor: '#4654ab' },
  {id: 2, logo: MasterCardIcon, bgColor: '#DF991D' },
  {id: 3, logo: BitCoinCardIcon, bgColor: '#568721' },
  {id: 4, logo: StripCardIcon, bgColor: '#E878AD' },
  {id: 5, logo: PaypalIcon, bgColor: '#5A96FF' },
  {id: 6, logo: BitpayIcon, bgColor: '#9869EB' },
]

const YourCards = () => {
  return (
    <InCardDiv>
      <CardTitle>
        <label>Your Cards</label>
      </CardTitle>
      <MainBox>
        {cardInfos.map(({id, logo: Logo, bgColor}) => 
        (
          <CreditCardModel key={id} $bgcolor={bgColor}>
          <CreditNumber>
              <NumberDiv>
                <Logo /> 
              <NumberInfo>
                <label>Card number</label>
                <code>8752 **** **** 6325</code>
              </NumberInfo>
            </NumberDiv>
            <ThreeDotIcon />
          </CreditNumber>
          <CreditDetails>
            <DetailDiv>
              <label>Accured</label>
              <code>$72,985</code>
            </DetailDiv>
            <DetailDiv>
              <label>Balance</label>
              <code>$56,533</code>
            </DetailDiv>
            <DetailDiv>
              <label>Blocked</label>
              <code>$250</code>
            </DetailDiv>
            <DetailDiv>
              <label>Valid</label>
              <code>06/24</code>
            </DetailDiv>
          </CreditDetails>
          <CreditStatus>
            <label>Card Status</label>
            <StatusDiv>
              <CircleIconDiv />
              <label>Active</label>
            </StatusDiv>
          </CreditStatus>
        </CreditCardModel>
          ))}
        
      </MainBox>
      <AddCard>
        <PlusRoundedIcon stroke={Color.$white} />
        <label>
          <strong>Add Card</strong>
        </label>
      </AddCard>
    </InCardDiv>
  );
};
export default YourCards;
