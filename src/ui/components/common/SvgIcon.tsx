import { styled } from 'styled-components';
import { Color } from '../../../constants/color';

export interface SvgIconProps {
    stroke?: string;
    strokeWidth?: string;
    width?: number;
    height?: number;
}

const SvgContainer = styled.div<SvgIconProps>`
    svg > path {
        stroke: ${props => props.stroke ? props.stroke : Color.$netural_700};
        stroke-width: ${props => props.stroke ? props.strokeWidth : '1'};
    }  
    svg > g >  path {
        stroke: ${props => props.stroke ? props.stroke : Color.$netural_700};
        stroke-width: ${props => props.stroke ? props.strokeWidth : '1'};
    }   
    svg > rect {
        fill: ${props => props.stroke ? props.stroke : Color.$netural_700};
        stroke: ${props => props.stroke ? props.stroke : Color.$netural_700};
    }
`
export { SvgContainer };
