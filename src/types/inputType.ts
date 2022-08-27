export interface InputProps {
  inputMeta: {
    label: string;
    type: 'text' | 'textarea' | 'password' | 'number';
    placeholder: string;
  };
  value: string;
  onChange: (...args: any[]) => void;
}

export interface joinInfoProps {
  name: string;
  password: string;
  year: string;
  nickname: string;
}
