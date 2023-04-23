export interface IButton {
    label: string;
    onPress: () => void;
    disabled?: boolean;
    loading?: boolean;
}
