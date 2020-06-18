export function getWellnessTip(){

    const wellnessTips = [
        "Eating consistently throughout the day helps stabilize blood sugars keeping you feeling energized.",
        "Get plenty of sleep - sleep is really important for our physical and mental health.",
        "Eat well. Certain mineral deficiencies, such as iron and vitamin B12 deficiencies, can give us a low mood.",
        "Get plenty of sunlight - Vitamin D helps our brains to release chemicals which improve our mood, like endorphins and serotonin.",
        "Stress is often unavoidable, but knowing what triggers your stress and knowing how to cope is key in maintaining good mental health.",
        "Activity and exercise are essential in maintaining good mental health.",
        "Being active not only gives you a sense of achievement, but it boosts the chemicals in your brain that help put you in a good mood.",
        "Exercising can help eliminate low mood, anxiety, stress and feeling tired and lazy.",
        "Try to make time for doing the fun things you enjoy.",
        "Getting enough sunshine is a simple and natural way to boost your mood. During the day, leave your curtains and blinds open as long as possible.",
        "Petting your dog for just 15 minutes has been shown to release a flurry of mood-boosting hormones including oxytocin",
        "Research has found that exercise can lift your spirits immediately following a sweat session, thanks to feel-good endorphins released during a workout",
        "Sleep is crucial to feeling your best. Be sure to get a good night’s sleep (7–9 hours for most adults) and maintain a consistent bedtime.",
        "Omega-3 fatty acids, like the kind found in fish, have been proven to be especially mood-boosting.",
        "You need to keep up your hydration levels in the winter too, as dehydration can cause fatigue, irritability, and headaches.",
        "The health benefits of drinking water are plentiful, and it is an easy and natural way to boost your mood.",
        "Leave enough time in your schedule for self-care.",
        "Every night before bed, write down three things you’re grateful for. Studies show that people who regularly practice gratitude are happier in general."
    ]

    const randomTip = wellnessTips[Math.floor(Math.random() * wellnessTips.length)];

    return randomTip;
}
