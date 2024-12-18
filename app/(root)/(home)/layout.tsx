interface Props {
  children: React.ReactNode;
}

const HomeLAyout = ({ children }: Props) => {
  return (
    <div>
      {/* Nav */}
      {children}
      {/* Footer */}
    </div>
  );
};

export default HomeLAyout;
