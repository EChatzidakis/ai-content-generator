'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Select } from '@/components/UI';
import { SelectOption } from '@/components/UI/Select';
import { useCategoryStore, useTypeStore } from '@/store';
import { ContentAudience, ContentFormat, ContentTone } from '@/types/content';

interface PromptSettingsFieldsProps {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void
  selectedType: string;
  setSelectedType: (selectedType: string) => void
  selectedAudience: string;
  setSelectedAudience: (selectedAudience: string) => void
  selectedTone: string;
  setSelectedTone: (selectedTone: string) => void
  selectedFormat: string;
  setSelectedFormat: (selectedFormat: string) => void
}

const PromptSettingsFieldsComponent: React.FC<PromptSettingsFieldsProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedAudience,
  setSelectedAudience,
  selectedTone,
  setSelectedTone,
  selectedFormat,
  setSelectedFormat
}) => {
  const [categoryOptions, setCategoryOptions] = useState<SelectOption[]>([]);
  const [typeOptions, setTypeOptions] = useState<SelectOption[]>([]);
  const [toneOptions, setToneOptions] = useState<SelectOption[]>([]);
  const [formatOptions, setFormatOptions] = useState<SelectOption[]>([]);
  const [audienceOptions, setAudienceOptions] = useState<SelectOption[]>([]);

  const { categories } = useCategoryStore();
  const { types } = useTypeStore();

  const handleSetCategoryOptions = useCallback(() => {
    if (categories.length === 0) {
      return;
    }
    const _categoryOptions = categories.map((category) => {
      return {
        label: category.name,
        value: category.id
      };
    });
    setCategoryOptions(_categoryOptions);
  }, [categories]);

  const handleSetTypeOptions = useCallback(() => {
    const _category = categories.find((item) => item.id === selectedCategory);
    if (!_category) {
      return;
    }
    const _typeIds = _category.types.map((type) => {
      return type.id;
    });
    const _types = types.filter((type) => _typeIds.includes(type.id));
    const _typeOptions = _types.map((type) => {
      return { label: type.name, value: type.id };
    });
    setTypeOptions(_typeOptions);
  }, [categories, selectedCategory, types]);

  const handleSetOptionsBasedOnType = useCallback(() => {
    if (selectedType === '') {
      setSelectedAudience('');
      setSelectedFormat('');
      setSelectedTone('');
      return;
    }

    const _selectedType = types.find((item) => item.id === selectedType);
    if (!_selectedType) {
      setSelectedAudience('');
      setSelectedFormat('');
      setSelectedTone('');
      return;
    }

    const availableAudiences = _selectedType.audiences;
    const availableFormats = _selectedType.formats;
    const availableTones = _selectedType.tones;

    handleSetAudienceOptions(availableAudiences);
    handleSetFormatOptions(availableFormats);
    handleSetToneOptions(availableTones);

    setSelectedAudience(_selectedType.defaultAudienceId);
    setSelectedFormat(_selectedType.defaultContentFormatId);
    setSelectedTone(_selectedType.defaultContentToneId);
  }, [selectedType, types, setSelectedAudience, setSelectedFormat, setSelectedTone]);

  useEffect(() => {
    handleSetCategoryOptions();
  }, [categories, handleSetCategoryOptions]);

  useEffect(() => {
    handleSetTypeOptions();
  }, [selectedCategory, handleSetTypeOptions]);

  useEffect(() => {
    handleSetOptionsBasedOnType();
  }, [selectedType, handleSetOptionsBasedOnType]);

  const handleSetAudienceOptions = (availableAudiences: ContentAudience[]) => {
    const _audienceOptions = availableAudiences.map((audience) => {
      return {
        value: audience.id,
        label: audience.name
      };
    });
    setAudienceOptions(_audienceOptions);
  };

  const handleSetFormatOptions = (availableFormats: ContentFormat[]) => {
    const _formatOptions = availableFormats.map((format) => {
      return {
        value: format.id,
        label: format.name
      };
    });
    setFormatOptions(_formatOptions);
  };

  const handleSetToneOptions = (availableTones: ContentTone[]) => {
    const _toneOptions = availableTones.map((tone) => {
      return {
        value: tone.id,
        label: tone.name
      };
    });
    setToneOptions(_toneOptions);
  };

  const handleSelectCategory = (value: string) => {
    setSelectedCategory(value);
    setSelectedType('');
  };
  const handleSelectType = (value: string) => setSelectedType(value);
  const handleSelectTone = (value: string) => setSelectedTone(value);
  const handleSelectFormat = (value: string) => setSelectedFormat(value);
  const handleSelectAudience = (value: string) => setSelectedAudience(value);

  const isTypeSelectDisabled = typeOptions.length === 0;
  const isToneSelectDisabled = toneOptions.length === 0;
  const isFormatSelectDisabled = formatOptions.length === 0;
  const isAudienceSelectDisabled = audienceOptions.length === 0;

  return (
    <>
      <Select
        label="Category"
        options={categoryOptions}
        selected={selectedCategory}
        onChange={handleSelectCategory}
      />
      <Select
        label="Type"
        options={typeOptions}
        selected={selectedType}
        onChange={handleSelectType}
        disabled={isTypeSelectDisabled}
      />
      <Select
        label="Tone"
        options={toneOptions}
        selected={selectedTone}
        onChange={handleSelectTone}
        disabled={isToneSelectDisabled}
      />
      <Select
        label="Format"
        options={formatOptions}
        selected={selectedFormat}
        onChange={handleSelectFormat}
        disabled={isFormatSelectDisabled}
      />
      <Select
        label="Audience"
        options={audienceOptions}
        selected={selectedAudience}
        onChange={handleSelectAudience}
        disabled={isAudienceSelectDisabled}
      />
    </>
  );
};

export const PromptSettingsFields = PromptSettingsFieldsComponent;
