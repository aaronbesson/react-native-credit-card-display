/// <reference types="react" />
import { ImageSourcePropType } from 'react-native';
declare type Props = {
    /** Number to display on the front of the card */
    number: number | string;
    /** Name to display on the front of the card */
    name: string;
    /** CVC to display on the back of the card */
    cvc: number | string;
    /** Expiration Date to display on the front of the card. displayed as given, so it should be formatted */
    expiration: string;
    /** Year for `Customer Since` */
    since?: number | string;
    /** Additional styles to apply to the front of the card */
    frontStyles?: object;
    /** Additional styles to apply to the back of the card */
    backStyles?: object;
    /** Alternate image to use for the front of the card */
    frontImage?: ImageSourcePropType;
    /** Alternate image to use for the back of the card */
    backImage?: ImageSourcePropType;
    /** Additional styles to apply to the component from `react-native-flip-card` */
    cardStyles?: object;
    /** Height for card. default: 190 */
    height?: number;
    /** Width for card. default: 300 */
    width?: number;
    /** Base font size to use. Will scale all displayed text. default: 20 */
    fontSize?: number;
    /** Text font color. Default: #FFFFFF (White) */
    fontColor?: string;
    /** Friction for the card flip. I couldn't figure out what this does, but I'm just passing it to `react-native-flip-card` if anyone wants it */
    friction?: number;
    /** Is the card flipped? Use this to programmatically `flip` the card. */
    flipped?: boolean;
    /** Border Radius to use on the images */
    borderRadius?: number;
} & typeof defaultProps;
declare const defaultProps: {
    height: number;
    width: number;
    fontSize: number;
    fontColor: string;
    friction: number;
    flipped: boolean;
    borderRadius: number;
    frontImage: any;
    backImage: any;
};
declare const CreditCardDisplay: {
    (props: Props): JSX.Element;
    defaultProps: {
        height: number;
        width: number;
        fontSize: number;
        fontColor: string;
        friction: number;
        flipped: boolean;
        borderRadius: number;
        frontImage: any;
        backImage: any;
    };
};
export default CreditCardDisplay;
