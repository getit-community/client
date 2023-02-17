import type { GetServerSidePropsContext } from 'next';

type Req = Pick<GetServerSidePropsContext, 'req'>;

export const checkUserAgent = ({ req }: Req) => {
  const userAgent = req.headers['user-agent'];

  if (!userAgent) return;
  const isMobile = userAgent.indexOf('Mobi') > -1;

  return isMobile;
};
