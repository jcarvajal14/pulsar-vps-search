import { css } from "styled-components";
import { device } from "../constants/device";

export const media = {
    xs: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.xs}) {
        ${css(literals, ...placeholders)};
    }`,
    sm: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.sm}) {
        ${css(literals, ...placeholders)};
    }`,
    md: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.md}) {
        ${css(literals, ...placeholders)};
    }`,
    lg: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.lg}) {
        ${css(literals, ...placeholders)};
    }`,
    xl: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.xl}) {
        ${css(literals, ...placeholders)};
    }`,
    xxl: (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (max-width: ${device.xxl}) {
        ${css(literals, ...placeholders)};
    }`,
}
