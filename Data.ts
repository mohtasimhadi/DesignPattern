class Data {
    private courseNumber: string
    private topicName: string
    private teacherName: string
    private time: string

    public getCourseNumber(): string {
        return this.courseNumber
    }

    public setCourseNumber(courseNumber: string): void {
        this.courseNumber = courseNumber
    }

    public getTopicName(): string {
        return this.topicName
    }

    public setTopicName(topicName: string): void {
        this.topicName = topicName
    }

    public getTeacherName(): string {
        return this.teacherName
    }

    public setTeacherName(teacherName: string): void {
        this.teacherName = teacherName
    }

    public getTime(): string {
        return this.time
    }

    public setTime(time: string): void {
        this.time = time
    }

}

export default Data