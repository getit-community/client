import React from 'react';
import {
  Container,
  IconContainer,
  BookmarkContainer,
  NotificationContainer,
  ProfileContainer,
} from './MydataStyles';
import { BookmarkIcon, NotificationsIcon, ProfileIcon } from 'assets/Icons';

const Mydata = () => {
  return (
    <Container>
      <IconContainer>
        <BookmarkContainer>
          <BookmarkIcon width={'3.3rem'} height={'3.3rem'} />
        </BookmarkContainer>
        <NotificationContainer>
          <NotificationsIcon width={'3.3rem'} height={'3.3rem'} />
        </NotificationContainer>
        <ProfileContainer>
          <ProfileIcon width={'3.3rem'} height={'3.3rem'} />
        </ProfileContainer>
      </IconContainer>
    </Container>
  );
};

export default Mydata;
