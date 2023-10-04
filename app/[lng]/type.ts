export type HomeProps = {
  params: { lng: string | undefined };
};
export type LayoutProps = {
  children: React.ReactNode;
} & HomeProps;
