import { Form, Input, Button } from 'antd';
import { useCallback } from 'react';
import useInput from '../../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled  from 'styled-components';

const CommentUploadBtn = styled(Button)`
  position: absolute;
  right: 0;
  bottom: -40px;
  background: #4c4c4c;
  border-color: #4c4c4c;
`;

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <CommentUploadBtn
          type="primary" 
          htmlType="submit">
          작성
        </CommentUploadBtn>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
}

export default CommentForm;