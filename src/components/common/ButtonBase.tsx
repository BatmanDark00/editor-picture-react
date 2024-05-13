import '@/assets/styles/components/common/buttonBase.scss';

interface Props {
  className?: string;
  size?: string;
  children: React.ReactNode;
}

function ButtonBase({ className = "btn-primary", size, children }: Props) {
  return (
    <>
      <button className={className} data-size={size}>{children}</button>
    </>
  );
}

export default ButtonBase;
