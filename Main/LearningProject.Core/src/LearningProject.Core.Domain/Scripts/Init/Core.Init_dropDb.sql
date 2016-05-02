USE [Master]
GO
IF db_id('LearningProject') IS NOT NULL
	BEGIN
		DROP DATABASE [LearningProject]
	END;