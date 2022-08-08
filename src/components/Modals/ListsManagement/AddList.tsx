import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AddListDto } from '../../../@types/dto/list/add.dto';
import { AddWordDto } from '../../../@types/dto/word/add.dto';
import ModalLayout from '../../../layouts/ModalLayout/ModalLayout';
import { inputModal } from '../../../shared/styles/input-variations';
import HookFormInput from '../../HookForm/HookFormInput';
import schema from './validation';
import s from './AddList.module.scss';

type Props = {
  onAddWord: SubmitHandler<AddListDto>;
};

export default function AddListModal({ onAddWord }: Props) {
  const values = useForm<AddListDto>({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data: AddListDto) => {
    onAddWord(data);
  };

  return (
    <FormProvider {...values}>
      <ModalLayout
        title="Add a new list"
        description="To add a new list just type a title below"
        btnText="confirm"
        onClick={() => console.log()}
      >
        <div className={s.list_container}>
          <form
            className={s.list_form}
            onSubmit={values.handleSubmit(submitHandler)}
          >
            <HookFormInput
              name="listTitle"
              placeholder="Your title"
              styles={inputModal}
              type="listTitle"
            />
          </form>
        </div>
      </ModalLayout>
    </FormProvider>
  );
}
