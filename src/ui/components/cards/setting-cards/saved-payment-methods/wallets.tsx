import {
  CardTitle,
  InCardDiv,
  WalletsContent,
  WalletBackgroundImage,
  WalletCardDiv,
  WalletCardHeader,
  WalletCardBody,
  CoinDiv,
} from './styled';
import WalletBackground from '../../../../../assets/images/wallet-background.png';
import WalletLogoText from '../../../common/svgicons/WalletLogoText';
import MultipleCrossIcon from '../../../common/svgicons/MultipleCrossIcon';
import { Color } from '../../../../../constants/color';
import { Hr } from '../../../common/Hr';
import EthereunIcon from '../../../common/svgicons/Ethereum';
import PoylgonIcon from '../../../common/svgicons/PolygonIcon';
import CryptoIcon from '../../../common/svgicons/Crypto';
import HuobiIcon from '../../../common/svgicons/HuobiIcon';

const YourWallets = () => {
  return (
    <InCardDiv>
      <CardTitle>
        <label>Your Wallets</label>
      </CardTitle>
      <WalletsContent>
        <WalletBackgroundImage src={WalletBackground} alt='wallet-background' />
        <WalletCardDiv>
          <WalletCardHeader>
            <WalletLogoText />
            <div>
              <span>
                <h4>?</h4>
              </span>
              <span>
                <MultipleCrossIcon stroke={Color.$white} />
              </span>
            </div>
          </WalletCardHeader>
          <WalletCardBody>
            <label><strong>Select Network</strong></label>
            <Hr />
            <section>
              <CoinDiv>
                <EthereunIcon />
                <label>Ethereum</label>
              </CoinDiv>
              <CoinDiv>
                <PoylgonIcon />
                <label>Polygon</label>
              </CoinDiv>
              <CoinDiv>
                <CryptoIcon />
                <label>Crypto</label>
              </CoinDiv>
              <CoinDiv>
                <HuobiIcon />
                <label>Houbi</label>
              </CoinDiv>
            </section>
          </WalletCardBody>
        </WalletCardDiv>
      </WalletsContent>
    </InCardDiv>
  );
};
export default YourWallets;
