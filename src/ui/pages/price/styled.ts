import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../constants/size';
import { Color } from '../../../constants/color';
import { device } from '../../../constants/device';
import { media } from '../../../styles/responsive';

export const PricePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-primary);
  height: calc(100vh - 60px);
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }
`;
export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${device.lg};
  ${media.lg`
  width: ${device.md}`};
  /* height: calc(100vh - 60px); */

  padding: ${Space.xxxl} ${Space.l};
  gap: ${Space.xxxl};
  ${media.md`
    width: ${device.sm};
  `}
  ${media.sm`
    width: ${device.xs};
  `}
`;
export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  label {
    color: ${Color.$brand_600};
    font-weight: 600;
    font-size: 1.5em;
  }
  h1 {
    font-size: 48px;
    font-weight: 600;
    /* line-height: none !important; */
  }
  p {
    font-size: 20px;
  }
  ${media.lg`
    text-align: center;
    width: ${device.md};
    label {
      font-size: 18px;
    }
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
    }
  `}
  ${media.md`
    text-align: center;
    width: ${device.xs};
    align-self: center;
    label {
      font-size: 18px;
    }
    h1 {
      font-size: 24px;
      padding: 0 24px;
    }
    p {
      font-size: 16px;
      display:none;
    }
  `}
`;

export const ConfigureSubHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  label {
    color: ${Color.$brand_600};
    font-weight: 600;
    font-size: 1.5em;
  }
  h1 {
    font-size: 48px;
    font-weight: 600;
    /* line-height: none !important; */
  }
  p {
    font-size: 20px;
  }
`;

export const SubBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xxxl};

  ${media.lg`
    gap: ${Space.xl};
  `}

  ${media.md`
  flex-direction: column;
  padding: ${Padding.none} ${Padding.xxl}
  `};
`;
export const ConfigureInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.l};
`;

export const ServerConfigureContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: linear-gradient(
    to bottom,
    #7f56d9,
    rgba(42, 108, 236, 0.88),
    rgba(0, 42, 255, 0.78)
  );
  /* border: 1px solid ; */
  border-radius: 16px;
`;
export const ServerConfigureBorderContent = styled.div`
  flex: 1;
  background-color: ${Color.$dark_card};
  margin: 1px;
  border-radius: 15px;
  padding: ${Space.l} ${Space.l};
  display: flex;
  flex-direction: column;
  gap: ${Space.xl};
`;
export const ServerConfigureDiv = styled.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  gap: ${Space.l};
  ${media.md`
    flex-direction: column;
  `}
`;
export const ConfigureBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
`;

export const ConfigureInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xs};
  align-items: center;
  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
    gap: ${Space.sb};
  `}
`;

export const ConfigureName = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
  align-items: center;
  label {
    font-size: 18px;
    color: white;
  }
  width: 200px;
`;
export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;
export const SelectDiv = styled.div`
  width: 180px;
`;

export const StepDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${Space.xs} ${Space.s};
`;

export const StepButton = styled.button`
  border-radius: ${Space.s};
  background-color: ${Color.$dark_card};
  border: solid 1px ${Color.$gray_600};
  padding: ${Space.s} ${Space.s};
  font-size: 24px;
  line-height: 0.7em;
  color: ${Color.$white};
`;

export const StepContext = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  justify-content: space-between;
  border-radius: ${BorderRadius.xl};
  padding: ${Padding.s};
  background-color: ${Color.$neutral_overlay};
  color: ${Color.$white};
  span {
    background-color: #476cec;
    padding: ${Space.none} ${Space.xxs};
    border-radius: ${BorderRadius.xs};
  }
`;

export const VerticalDiver = styled.div`
  width: 0px;
  border-left: solid 1px #8b8b93;
`;

export const IpSliderDiv = styled.main`
  width: 250px;
  position: relative;
  &::after {
    content: '1 IP';
    position: absolute;
    top: 20px;
    left: -10px;
    color: #8a8a98;
    padding: 4px;
  }
  &:before {
    content: '50 IPs';
    position: absolute;
    top: 20px;
    right: -20px;
    color: #8a8a98;
    padding: 4px;
  }
`;

export const BandwidthSliderDiv = styled.main`
  width: 250px;
  
  ${media.sm`
    width: 150px;
  `}
  position: relative;
  &::after {
    content: '5 Gbps';
    position: absolute;
    top: 20px;
    left: -10px;
    color: #8a8a98;
    padding: 4px;
  }
  &:before {
    content: '50 Gbps';
    position: absolute;
    top: 20px;
    right: -20px;
    color: #8a8a98;
    padding: 4px;
  }
`;
