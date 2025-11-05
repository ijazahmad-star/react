export default function Tabs({ children, buttons, ButtonsConatainer = 'menu'}) {
  return (
    <>
      <ButtonsConatainer>{buttons}</ButtonsConatainer>
      {children}
    </>
  );
}
