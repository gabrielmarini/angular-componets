export class Settings{
    rows: Array<Row>
    buttons: Array<Buttons>;
}
export class InputSettings{
    value: string;
    layout: Array<string>;
    label: string;
    placeholder: string;
    name: string;
    type: string;
    classCss: Array<string>;
    id: string;
    validation: Validation;
}
class Buttons{
    label: string;
    classCss: Array<string>;
    type: string;
}
class Row{
    title?: string;
    inputs: Array<InputSettings>
}
class Validation{
    requered: boolean;
    isEmpty: boolean;
    patern?: Patern;
}
class Patern{
    use: boolean;
    patern: any;
}