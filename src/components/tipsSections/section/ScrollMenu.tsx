import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// @ts-ignore
import { Card } from "../component/scroll-menu/cards.tsx";
// @ts-ignore
import usePreventBodyScroll from "../component/scroll-menu/usePreventBodyScroll.ts";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(8)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function Arrow() {
  const [items] = React.useState(getItems);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu onWheel={onWheel}>
            {items.map(({ id }) => (
              <Card
                title={id}
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              />
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}
export default Arrow;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
