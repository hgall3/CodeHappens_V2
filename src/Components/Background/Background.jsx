import './Background.scss';


const Background = ({ children, color = "default" }) => {
  return (
    <div className={`main-background ${color}`}>
      {children}
    </div>
  );
};

export default Background;