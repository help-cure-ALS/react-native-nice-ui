import { List as BaseList } from './List';
import { ListItem } from './ListItem';
import { ListInputItem } from './ListInputItem';
import { ListSliderItem } from './ListSliderItem';
import { ListText } from './ListText';
import { ListWrapper } from './ListWrapper';
import { ListSection } from './ListSection';
import { ListSectionCard } from './ListSectionCard';

type ListComponent = typeof BaseList & {
    Item: typeof ListItem;
    InputItem: typeof ListInputItem;
    SliderItem: typeof ListSliderItem;
    Text: typeof ListText;
    Wrapper: typeof ListWrapper;
    Section: typeof ListSection;
    SectionCard: typeof ListSectionCard;
};

const List = BaseList as ListComponent;

List.Item = ListItem;
List.InputItem = ListInputItem;
List.SliderItem = ListSliderItem;
List.Text = ListText;
List.Wrapper = ListWrapper;
List.Section = ListSection;
List.SectionCard = ListSectionCard;

export { List };

// optional: types re-export
export type { ListProps } from './List';
export type { ListItemProps } from './ListItem';
export type { ListInputItemProps, ListInputItemRef } from './ListInputItem';
export type { ListSliderItemProps } from './ListSliderItem';
export { SliderAvailable } from './ListSliderItem';
export type { ListTextProps } from './ListText';
export type { ListWrapperProps } from './ListWrapper';
export type { ListSectionProps } from './ListSection';
export type { ListSectionCardProps } from './ListSectionCard';
