import './myLabel.css';

export interface MyLabelProps {
    /**
     * El nombre a mostrar en la etiqueta
     */
    label: string;
    /**
     * El tamaño a usar para la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Valor para determinar si la etiqueta debe ser todo en mayúsculas
     */
    allCaps?: boolean;
    /**
     * Color a ser aplicado en la etiqueta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * El color a ser aplicado a 
     */
    fontColor?: string;
}

export const MyLabel = ( {
    label = '',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor = ''
}: MyLabelProps ) => {

    return (
        <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
            { allCaps ? label.toLocaleUpperCase() : label }
        </span>
    );
};
