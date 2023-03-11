import React from 'react';
import {
  Container,
  IconContainer,
  BookmarkContainer,
  NotificationContainer,
  ProfileContainer,
} from './MydataStyles';
import {
  // BookmarkIcon,
  // NotificationsIcon,
  AccountCircleIcon,
} from 'assets/icons';
import Link from 'next/link';

const Mydata = () => {
  return (
    <Container>
      <IconContainer>
        <Link href=''>
          <BookmarkContainer>
            {/* <BookmarkIcon width={'2rem'} height={'2rem'} /> */}
          </BookmarkContainer>
        </Link>
        <Link href=''>
          <NotificationContainer>
            {/* <NotificationsIcon width={'3.3rem'} height={'3.3rem'} /> */}
          </NotificationContainer>
        </Link>
        <Link href='/login' passHref>
          <a>
            <ProfileContainer>
              <AccountCircleIcon fill={false} />
            </ProfileContainer>
          </a>
        </Link>
      </IconContainer>
    </Container>
  );
};

export default Mydata;
