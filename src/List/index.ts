import { List as BaseList } from './List';
import { ListItem } from './ListItem';
import { ListText } from './ListText';
import { ListWrapper } from './ListWrapper';
import { ListSection } from './ListSection';

type ListComponent = typeof BaseList & {
    Item: typeof ListItem;
    Text: typeof ListText;
    Wrapper: typeof ListWrapper;
    Section: typeof ListSection;
};

const List = BaseList as ListComponent;

List.Item = ListItem;
List.Text = ListText;
List.Wrapper = ListWrapper;
List.Section = ListSection;

export { List };

// optional: types re-export
export type { ListProps } from './List';
export type { ListItemProps } from './ListItem';
export type { ListTextProps } from './ListText';
export type { ListWrapperProps } from './ListWrapper';
export type { ListSectionProps } from './ListSection';
