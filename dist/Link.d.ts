/// <reference types="react" />
import { AnchorProps } from './types';
declare type Props = {
    href: string;
} & AnchorProps;
export declare const Link: ({ href, ...rest }: Props) => JSX.Element;
export {};
