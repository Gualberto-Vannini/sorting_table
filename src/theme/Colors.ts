interface ColorObject {
  readonly 50?: string;
  readonly 75?: string;
  readonly 100: string;
}

interface Theme {
  readonly black: ColorObject;
  readonly green: ColorObject;
}

const green: ColorObject = {
  100: '#119DA4',
};

const black: ColorObject = {
  50: '#C4C4C4',
  75: '#888888',
  100: '#1C1919',
};

const theme: Theme = {
  black,
  green,
};

export default theme;
