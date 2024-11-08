let innerAudioContext;
export const createPlayer = () => {
    return innerAudioContext = uni.getBackgroundAudioManager ?
        uni.getBackgroundAudioManager() : uni.createInnerAudioContext();
};
export const getPlayer = () => innerAudioContext;