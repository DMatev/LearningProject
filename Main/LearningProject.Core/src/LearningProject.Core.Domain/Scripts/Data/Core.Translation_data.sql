USE [LearningProject.Core]
GO
INSERT INTO [Core].[Translation] ([MessageCode], [Content], [LanguageID]) VALUES (N'Error', N'Error',  1)
INSERT INTO [Core].[Translation] ([MessageCode], [Content], [LanguageID]) VALUES (N'Error', N'#Error', 2)
INSERT INTO [Core].[Translation] ([MessageCode], [Content], [LanguageID]) VALUES (N'MissingLangauge', N'Language not found',  1)
INSERT INTO [Core].[Translation] ([MessageCode], [Content], [LanguageID]) VALUES (N'MissingLangauge', N'#Language not found', 2)