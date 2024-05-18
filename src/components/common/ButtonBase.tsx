import  buttonBase from '@/assets/styles/components/common/buttonBase.module.scss';

interface Props {
  className?: string;
  size?: 'small' | 'medium' | 'large'; 
  margin?: 'none' | 'small' | 'medium' | 'large';
  children: React.ReactNode;
}




function ButtonBase({ className = "btn_theme", size="small", margin="small", children }: Props) {
  return (
    <>
      <button className={buttonBase[className]} data-size={size} data-margin={margin}>{children}</button>
    </>
  );
}

export default ButtonBase;
