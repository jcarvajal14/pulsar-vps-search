import React, { useEffect, useState } from 'react';
import {
  ConfigureBody,
  ConfigureInfo,
  ConfigureName,
  ConfigureSubHeader,
  IconDiv,
  IpSliderDiv,
  SelectDiv,
  ServerConfigureBorderContent,
  ServerConfigureContent,
  StepButton,
  StepContext,
  StepDiv,
  VerticalDiver,
} from './styled';
import LocationIcon from '../../components/common/svgicons/LocationIcon';
import ProcessorIcon from '../../components/common/svgicons/ProcessorIcon';
import StorageIcon from '../../components/common/svgicons/StorageIcon';
import MemoryIcon from '../../components/common/svgicons/MemoryIcon';
import IpAddressesIcon from '../../components/common/svgicons/IpAddressesIcon';
import SelectComponent from '../../components/common/select';
import EarthIcon from '../../components/common/svgicons/EarthIcon';
import { Color } from '../../../constants/color';
import { Slider } from 'antd';

const ServerConfigure = () => {
  const [isClient, setClient] = useState<boolean | undefined>();
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <ServerConfigureContent>
      <ServerConfigureBorderContent>
        <ConfigureSubHeader>
          <h3>Server Configuration</h3>
          <p
            style={{ fontSize: '16px' }}
          >{`Customize your server\'s specifications to ensure optimal performance and reliability`}</p>
        </ConfigureSubHeader>
        <ConfigureBody>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <LocationIcon stroke='white' />
              </IconDiv>
              <label>Location</label>
            </ConfigureName>
            <SelectDiv>
              <SelectComponent
                Icon={() => <EarthIcon stroke={Color.$white} />}
              />
            </SelectDiv>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <ProcessorIcon stroke='white' />
              </IconDiv>
              <label>Processor</label>
            </ConfigureName>
            <StepDiv>
              <StepButton>{`\u2212`}</StepButton>
              <StepContext>
                <span>Intel</span>
                <label>{`6 Cores`}</label>
                <VerticalDiver />
                <label>{`2.90GHz`}</label>
              </StepContext>
              <StepButton>{`\u002b`}</StepButton>
            </StepDiv>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <StorageIcon stroke='white' />
              </IconDiv>
              <label>Storage</label>
            </ConfigureName>
            <StepDiv>
              <StepButton>{`\u2212`}</StepButton>
              <StepContext>
                <label>{`2\u00d7 2TBNVME`}</label>
              </StepContext>
              <StepButton>{`\u002b`}</StepButton>
            </StepDiv>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <MemoryIcon stroke='white' />
              </IconDiv>
              <label>Memory</label>
            </ConfigureName>
            <StepDiv>
              <StepButton>{`\u2212`}</StepButton>
              <StepContext>
                <label>{`16 GB`}</label>
              </StepContext>
              <StepButton>{`\u002b`}</StepButton>
            </StepDiv>
          </ConfigureInfo>
          <ConfigureInfo>
            <ConfigureName>
              <IconDiv>
                <IpAddressesIcon stroke='white' width={30} height={27} />
              </IconDiv>
              <label>Ip Addresses</label>
            </ConfigureName>
            {isClient ? (
              <IpSliderDiv>
                <Slider
                  max={50}
                  min={1}
                  defaultValue={1}
                  // tooltip={{ open: true }}
                />
              </IpSliderDiv>
            ) : null}
          </ConfigureInfo>
        </ConfigureBody>
      </ServerConfigureBorderContent>
    </ServerConfigureContent>
  );
};
export default ServerConfigure;
