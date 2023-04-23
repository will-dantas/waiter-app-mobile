export interface ITableModal {
    visible: boolean;
    onClose: () => void;
    onSave: (table: string) => void;
}
