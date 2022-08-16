import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FC } from 'react';

const SearchInput: FC = () => {
  return (
    <>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
    </>
  );
};

export default SearchInput;
