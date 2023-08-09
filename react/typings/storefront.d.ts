import { FunctionComponent } from "react";

declare global {
  interface StorefrontFunctionComponent<P = GenericObject>
    extends FunctionComponent<P> {
    getSchema?(props: P): GenericObject;
    schema?: GenericObject;
  }

  interface StorefrontComponent<P = GenericObject, S = GenericObject>
    extends Component<P, S> {
    getSchema?(props: P): GenericObject;
    schema: GenericObject;
  }

  interface PromotionalCountdown {
    isActive: boolean;
    onlyOne: boolean;
    children?: Array<Exclude<ReactNode, boolean | null | undefined>>;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    horas: string;
  }

  interface ProductCard {
    name: string;
    price: string;
    sellingPrice: string;
    brand: string;
    discount: string;
    callToAction: string;
    url: string;
    image: string;
  }
}
