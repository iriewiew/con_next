import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const Example = (props) => {
    const items = props.data;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    let slides = props.data.map(({ fields }) => {
        return (

            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={fields.heroImage.fields.file.url}
            >
                <img src={fields.heroImage.fields.file.url} alt={fields.title} />
                <CarouselCaption captionText={fields.description} captionHeader={fields.title} />
            </CarouselItem>
        );
    });

    return (

        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {console.log('slides', slides.key)}
            <CarouselIndicators items={props.data} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;