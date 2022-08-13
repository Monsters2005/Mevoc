import React, { useState } from 'react';
import { DashboardWordList } from '../../components/ListsManagement/WordList/WordList';
import { Button } from '../../components/UI/Button/Button';
import { Dropdown } from '../../components/UI/DropDown/Dropdown';
import { Option } from '../../components/UI/DropDown/types';
import { Input } from '../../components/UI/Input/Input';
import { useModal } from '../../context/ModalContext';
import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import { list } from '../../mocks/list';
import { GlobalSvgSelector } from '../../shared/GlobalSvgSelector';
import { pluralizeString } from '../../utils/components/pluralizeString';
import s from './ListManagement.module.scss';

export default function ListManagementPage() {
  const listOptions = [list].map(
    (el): Option => ({
      value: el.name,
      id: el.id,
      details: pluralizeString(el.words.length),
      addition: (
        <Button
          type="small"
          onClick={() => console.log('list')}
          styles={{ height: '20px', padding: '5px' }}
        >
          <GlobalSvgSelector id="expand" />
        </Button>
      ),
    })
  );

  const [selectedList, setSelectedList] = useState<Option | undefined>(
    listOptions[0]
  );

  const { states, setModalStates } = useModal();

  return (
    <PageLayout title="Lists management">
      <div className={s.listmanagement_container}>
        <div className={s.listmanagement_header}>
          <div className={s.listmanagement_lists}>
            <Dropdown
              listTitle="Your lists"
              options={listOptions}
              selectedItem={selectedList}
              setSelectedItem={(item: Option | undefined) => setSelectedList(item)}
              allowNoneSelected
              styles={{ width: '250px', marginBottom: '8px' }}
              listStyles={{ width: '350px' }}
            />
            <Button
              type="small"
              onClick={() => setModalStates({ ...states, addList: true })}
            >
              <GlobalSvgSelector id="plus-circle" />
            </Button>
          </div>
          <div className={s.listmanagement_control}>
            <Input
              name="search"
              placeholder="Search the word.."
              styles={{ padding: '14px 10px 13px 15px', width: '300px' }}
            >
              <GlobalSvgSelector id="search" />
            </Input>
            <Button type="small" onClick={() => console.log('remove word')}>
              <GlobalSvgSelector id="delete" />
            </Button>
          </div>
        </div>
        <div className={s.listmanagement_content}>
          <DashboardWordList
            words={list.words}
            onAddWord={() => setModalStates({ ...states, addWord: true })}
            onEditWord={() => setModalStates({ ...states, editWord: true })}
          />
        </div>
      </div>
    </PageLayout>
  );
}
