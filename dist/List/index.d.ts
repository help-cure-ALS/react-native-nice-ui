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
declare const List: ListComponent;
export { List };
export type { ListProps } from './List';
export type { ListItemProps } from './ListItem';
export type { ListTextProps } from './ListText';
export type { ListWrapperProps } from './ListWrapper';
export type { ListSectionProps } from './ListSection';
