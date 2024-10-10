
CREATE SCHEMA job_portal_datn;
USE job_portal_datn;
CREATE TABLE City (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

CREATE TABLE Towns (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    CityId INT,
    CONSTRAINT fk_cityid_towns FOREIGN KEY (CityId) REFERENCES City(Id)
);

CREATE TABLE Roles (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    RoleId INT,  -- Thêm cột RoleId để phân biệt Admin, JobSeeker, Company
    CONSTRAINT fk_roleid_users FOREIGN KEY (RoleId) REFERENCES Roles(Id)
);

CREATE TABLE JobSeekers (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Gender VARCHAR(10),
    BirthDate DATE,
    Email VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Experience TEXT,
    Address VARCHAR(255),
    TownId INT,
    UserId INT,
    CONSTRAINT fk_townid_jobseekers FOREIGN KEY (TownId) REFERENCES Towns(Id),
    CONSTRAINT fk_userid_jobseekers FOREIGN KEY (UserId) REFERENCES Users(Id)
);

CREATE TABLE Admin (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    UserId INT,
    TownId INT,
    CONSTRAINT fk_userid_admin FOREIGN KEY (UserId) REFERENCES Users(Id),
    CONSTRAINT fk_townid_admin FOREIGN KEY (TownId) REFERENCES Towns(Id)
);


CREATE TABLE Companies (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255),
    PhoneNumber VARCHAR(15),
    Address VARCHAR(255),
    TownId INT,
    UserId INT,
    CONSTRAINT fk_townid_companies FOREIGN KEY (TownId) REFERENCES Towns(Id),
    CONSTRAINT fk_userid_companies FOREIGN KEY (UserId) REFERENCES Users(Id)
);
CREATE TABLE Categories (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

CREATE TABLE JobPositions (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);
CREATE TABLE JobVacancies (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Salary DECIMAL(10, 2),
    EmploymentType VARCHAR(50),
    ApplicationDeadline DATE,
    IsPublished BOOLEAN DEFAULT FALSE,
    CompanyId INT,
    CategoryId INT,
    JobPositionId INT,
    Address VARCHAR(255),
    TownId INT,  -- Thêm cột TownId
    CONSTRAINT fk_companyid_jobvacancies FOREIGN KEY (CompanyId) REFERENCES Companies(Id),
    CONSTRAINT fk_categoryid_jobvacancies FOREIGN KEY (CategoryId) REFERENCES Categories(Id),
    CONSTRAINT fk_jobpositionid_jobvacancies FOREIGN KEY (JobPositionId) REFERENCES JobPositions(Id),
    CONSTRAINT fk_townid_jobvacancies FOREIGN KEY (TownId) REFERENCES Towns(Id)  -- Khóa ngoại tham chiếu đến bảng Towns
);

CREATE TABLE JobApplications (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    ApplicationDate DATE NOT NULL,
    Status VARCHAR(50),
    JobVacancyId INT,
    JobSeekerId INT,
    CONSTRAINT fk_jobvacancyid_jobapplications FOREIGN KEY (JobVacancyId) REFERENCES JobVacancies(Id),
    CONSTRAINT fk_jobseekerid_jobapplications FOREIGN KEY (JobSeekerId) REFERENCES JobSeekers(Id)
);


CREATE TABLE Bookmarks (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    JobVacancyId INT,
    JobSeekerId INT,
    CONSTRAINT fk_jobvacancyid_bookmarks FOREIGN KEY (JobVacancyId) REFERENCES JobVacancies(Id),
    CONSTRAINT fk_jobseekerid_bookmarks FOREIGN KEY (JobSeekerId) REFERENCES JobSeekers(Id)
);

CREATE TABLE EducationDetails (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    University VARCHAR(255),
    Degree VARCHAR(255),
    Major VARCHAR(255),
    GraduationYear YEAR,
    GPA DECIMAL(3, 2),
    JobSeekerId INT,
    CONSTRAINT fk_jobseekerid_educationdetails FOREIGN KEY (JobSeekerId) REFERENCES JobSeekers(Id)
);

CREATE TABLE Skills (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

CREATE TABLE JobSeekerSkills (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    SkillId INT,
    JobSeekerId INT,
    CONSTRAINT fk_skillid_jobseekerskills FOREIGN KEY (SkillId) REFERENCES Skills(Id),
    CONSTRAINT fk_jobseekerid_jobseekerskills FOREIGN KEY (JobSeekerId) REFERENCES JobSeekers(Id)
);
