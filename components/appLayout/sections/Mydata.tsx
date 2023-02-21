import React from 'react';
import {
  Container,
  IconContainer,
  BookmarkContainer,
  NotificationContainer,
  ProfileContainer,
} from './MydataStyles';
import { BookmarkIcon, NotificationsIcon, ProfileIcon } from 'assets/Icons';
import Link from 'next/link';

const Mydata = () => {
  return (
    <Container>
      <IconContainer>
        <Link href=''>
          <BookmarkContainer>
            <BookmarkIcon width={'3.3rem'} height={'3.3rem'} />
          </BookmarkContainer>
        </Link>
        <Link href=''>
          <NotificationContainer>
            <NotificationsIcon width={'3.3rem'} height={'3.3rem'} />
          </NotificationContainer>
        </Link>
        <Link href='/login' passHref>
          <a>
            <ProfileContainer>
              <ProfileIcon width={'3.3rem'} height={'3.3rem'} />
            </ProfileContainer>
          </a>
        </Link>
      </IconContainer>
    </Container>
  );
};

export default Mydata;
